import { NextResponse } from "next/server"
import { main } from "../route"
import prisma from "@/prisma";

export const GET = async (req:Request , res :NextResponse) => {
    try {
        const id = req.url.split("/mobiles/")[1]
        await main();
        const mobile = await prisma.mobile.findFirst({where :{id}} )
        if(!mobile)
            return NextResponse.json({message : "Not Found",},{status:404})
        return NextResponse.json({message : "Success", mobile}, {status : 200})
    } catch (error) {
        return NextResponse.json({message : "Error" , error}, {status:500})
    }
    finally {
        await prisma.$disconnect();
    }
}
export const PUT = async (req:Request , res : NextResponse) => {
    try {
        const id = req.url.split("/mobiles/")[1]
        const {title,plateforme, typeecran, resolutionecran, processeur,stockage,ram,battrie,camera} = await req.json()
        await main();
        const mobile = await prisma.mobile.update({data :{title,plateforme, typeecran, resolutionecran, processeur,stockage,ram,battrie,camera}, where :{id}})
        return NextResponse.json({message : "Update Success", mobile}, {status : 200})
    } catch (error) {
        return NextResponse.json({message : "Error" , error}, {status:500})
    }
    finally {
        await prisma.$disconnect();
    }
}
export const DELETE = async (req:Request , res : Response) => {
    try {
        const id = req.url.split("/mobiles/")[1]
        await main();
        const mobile = await prisma.mobile.delete({where :{id}})
        return NextResponse.json({message : "Delete Success", mobile}, {status : 200})
    } catch (error) {
        return NextResponse.json({message : "Error" , error}, {status:500})
    }
    finally {
        await prisma.$disconnect();
    }
}