'use client';
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CldImage } from "next-cloudinary";

export function TabsDemo({ src }: { src: string }) {
  return (
    <Tabs defaultValue="original" className="w-full py-5">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="original" className="bg-gray-300 border-2 border-gray-300 hover:bg-gray-300 font-semibold">Original</TabsTrigger>
        <TabsTrigger value="preserveTransformations" className="bg-gray-300 border-2 border-gray-300 hover:bg-gray-300 font-semibold">Preserve Transformations</TabsTrigger>
        <TabsTrigger value="zoom" className="bg-gray-300 border-2 border-gray-300 hover:bg-gray-300 font-semibold">Color</TabsTrigger>
        <TabsTrigger value="crop" className="bg-gray-300 border-2 border-gray-300 hover:bg-gray-300 font-semibold">Crop</TabsTrigger>
      </TabsList>
      {/* original */}
      <TabsContent value="original">
        <div className="flex gap-x-5">
          <CldImage
            width="200"
            height="100"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="200"
            height="100"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
        </div>
      </TabsContent>
      {/* preserveTransformations */}
      <TabsContent value="preserveTransformations">
        <div className="flex gap-x-5">
          <CldImage
            width="200"
            height="100"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="200"
            height="100"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            preserveTransformations = {true}
          />
        </div>
      </TabsContent>
      {/* zoom */}
      <TabsContent value="zoom">
        <div className="flex gap-x-5">
          <CldImage
            width="200"
            height="100"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="200"
            height="100"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            color	 ="red"
          />
        </div>
      </TabsContent>
      {/* crop */}
      <TabsContent value="crop">
        <div className="flex gap-x-5">
          <CldImage
            width="200"
            height="100"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="200"
            height="100"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            crop="thumb"
          />
        </div>
      </TabsContent>
    </Tabs>
  )
}
