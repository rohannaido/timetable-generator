"use server"

import client from "@/db"

export async function createTeacher(name: string, email: string) {

  // TODO: add validations

  try {

    await client.teacher.create({
      data: {
        name: name,
        email: email,
      }
    });

    return { message: `Added todo asdf` };
  } catch (e) {
    return { message: "Failed to create todo" };
  }
}

export async function listTeacher() {
  try {

    let teacherList = await client.teacher.findMany({
      orderBy: [
        { id: "desc" }
      ]
    });

    return teacherList;

  } catch (e) {
    return [];
  }
}