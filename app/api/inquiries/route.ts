import {NextResponse} from 'next/server';
import {PrismaPg} from '@prisma/adapter-pg';
import {PrismaClient} from '@/app/generated/prisma/client';

export const runtime='nodejs';

export async function POST(request:Request){
    try{if(!process.env.DATABASE_URL)
            return NextResponse.json(
              {message:'The enquiry service is not configured yet. Please try again later.'},
              {status:503}
            );

            const length=Number(request.headers.get('content-length')||0);
             if(length>12000)
                return NextResponse.json(
                  {message:'Request is too large.'},
                  {status:413}
                );

            const body=await request.json();

            const clean=(v:unknown,max:number)=>typeof v==='string'?v.trim().slice(0,max):'';
            const name=clean(body.name,100),
              email=clean(body.email,254),
              service=clean(body.service,100),
              message=clean(body.message,4000),
              kind=body.kind==='consultation'?'consultation':'contact';
            
            if(!name||!service||message.length<10||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                return NextResponse.json(
                  {message:'Please complete all fields with a valid email address.'},
                  {status:400}
                );

                const prisma=new PrismaClient({adapter:new PrismaPg({connectionString:process.env.DATABASE_URL})});
                  try{await prisma.consultationRequest.create(
                    {data:{name,email,service,message,kind}}
                   )}
              finally{await prisma.$disconnect()}
                return NextResponse.json({message:'Thank you. Your request has been received.'})
       }catch{return NextResponse.json(
              {message:'We could not save your request. Please try again later.'},
              {status:500}
            )
        }
}
