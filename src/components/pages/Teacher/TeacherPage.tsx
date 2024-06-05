"use client"

import { Button } from '@/components/ui/button';
import { FormEvent, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

/*
TODO: add ui components
,,,,
*/

export function Teacher({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <div className="h-screen">
            <AddTeacherButton />
            {children}
        </div>
    )
}

export function AddTeacherButton() {
    const [open, setOpen] = useState(false);
    const [showAddSubjectForm, setShowAddSubjectForm] = useState(false);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        console.log(formData.getAll('email'))
        console.log(formData.get("username"))

        const response = await fetch('/api/teacher', {
            method: 'POST',
            body: formData,
        })

        console.log(open);

        setOpen(false)

        const data = await response.json()
    }

    function handleAddSubjects() {
        setShowAddSubjectForm(true);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild><Button variant="outline">+ Add Teacher</Button></DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Teacher</DialogTitle>
                    <DialogDescription>
                        Add teacher details. Click save when youre done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                className="col-span-3"
                            />
                        </div>
                    </div>


                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}