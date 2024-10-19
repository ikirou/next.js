import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server"


 export async function main ()  {
    try {
        await prisma.$connect()
    } catch (error) {
        return Error("database connection unsuccessull")
    }
   
}
/* export const GET = async (req:NextRequest, res:NextResponse)=>{
  try {
    await main();
    const mobiles = await prisma.mobile.findMany()
    return NextResponse.json ({message : "Success", mobiles},{status : 200})
  } catch (error) {
   return NextResponse.json( { message : "Error",error },{status: 500})
  }
  finally {
    await prisma.$disconnect()
  }
} */
export const GET  = async (req:NextRequest, res:NextResponse)=>{
try {
  await main()
  const mobiles = await prisma.mobile.findMany()
  const searchParams = req.nextUrl.searchParams
  const query =  searchParams.get("search")?.toLocaleLowerCase()
  const filterMobiles = query ? mobiles.filter((mobile)=>mobile.title.toLowerCase().includes(query)) :
  mobiles
  
    return NextResponse.json({message : "Success", filterMobiles},{status : 200})
   
  
} catch (error) {
  return NextResponse.json({message : "Error",Error},{status:500})
  
}
finally{
await prisma.$disconnect()
}

}
 export const POST = async (req:Request, res:NextResponse)=>{
    try {
      const {title,plateforme, typeecran, resolutionecran, processeur,stockage,ram,battrie,camera} = await req.json();
      await main();
      const mobile = await prisma.mobile.create({data : {title,plateforme, typeecran, resolutionecran, processeur,stockage,ram,battrie,camera}});
      return NextResponse.json({ message : "Success", mobile},{status:201})
      
    } catch (error) {
      return NextResponse.json({message : "Faild", error},{status:501})
    }
    finally {
      await prisma.$disconnect();
    }
} 
/* export default function handle(req:NextRequest, res:NextResponse ){
  if(req.method==="POST"){
    const { data } = req.body;
    res.status(200).json({message : "data received", data})
  }else {
    res.setHeader('Allow',['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  }

} */
export async function HandlePost (request:any){
  if(request.method==="POST"){

    const {searchparams} = await request.json();
  return new Response(JSON.stringify({success:true,data:searchparams}),
{
  status:200,
  headers:{
    'Content-Type': 'application/json',
  }
})
  }
  
}