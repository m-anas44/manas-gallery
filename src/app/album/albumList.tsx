import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { folderType } from './page'
import Link from 'next/link'
const AlbumList = ({ folders }: { folders: folderType }) => {
    return (
        <div>
            <Card className="w-[340px]">
                <CardHeader>
                    <CardTitle>{folders.name}</CardTitle>
                    <CardDescription>Click to open your added album. Have a look! what is in your {`${folders.name}`} album</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-end">
                    <Link href={`/album/${folders.name}`}>
                        <Button className='bg-gray-900 text-white rounded hover:bg-gray-900'>View Album</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default AlbumList