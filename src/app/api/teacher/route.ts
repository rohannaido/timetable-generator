import { createTeacher } from '@/app/actions/teacher';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    let formData = await req.formData();

    console.log(formData);

    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";

    console.log(name, '   >   ', email);

    await createTeacher(name, email);

    return NextResponse.json({ name })
}