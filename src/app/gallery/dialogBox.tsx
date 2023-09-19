'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { BiSolidImageAdd } from "react-icons/bi"
import { createFolder } from "./actions"

const DialogBox = ({imageData}:{imageData:string}) => {
    const [album,setAlbum]=useState("")
    const [open,setOpen]=useState(false)
    return (
        <div className="text-3xl rounded cursor-pointer">
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="ghost" className="p-0">
                        <BiSolidImageAdd className="text-3xl bg-white 
                    bg-opacity-75 rounded p-1 cursor-pointer"/>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white bg-opacity-70">
                    <DialogHeader>
                        <DialogTitle className="capitalize">Add to Album</DialogTitle>
                        <DialogDescription className="font-semibold">
                           Enter album name for picture which you want to add in.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="album_name" className="font-semibold uppercase tracking-widest">
                                Name
                            </Label>
                            <Input id="album_name" 
                            value={album}
                             placeholder="Album Name Here"
                             onChange={(e)=>{setAlbum(e.target.value)}}
                              className="col-span-3" />
                        </div>
                        
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="bg-gray-900 text-white hover:bg-gray-900 rounded" 
                        onClick={async ()=>{
                            setOpen(false)
                            await createFolder(album, imageData)
                            }}>
                            Add To Album</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog></div>
    )
}

export default DialogBox