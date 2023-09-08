"use client";

import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";

const Upload = () => {
    const router = useRouter();
    interface UploadImage {
        event: "success";
        info: {
          public_id: string;
        }
      }
    return (
        <Button asChild className="bg-black rounded text-white hover:bg-black cursor-pointer">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                </svg>
                <CldUploadButton
                    onUpload={(result) => {
                        let res = result as UploadImage;
                        setTimeout(()=>{
                            router.refresh();
                        }, 1000)
                    }}
                    uploadPreset="g7hq9orw" className="text-md font-semibold" />
            </div>
        </Button>
    )
}

export default Upload