import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const Home = () => {
  return (
    <div className="bg-[#242424] flex justify-center " /**main container */>
      <div className="flex p-3 items-center justify-between gap-21">
        <div className="text-2xl font-semibold text-blue-100">SamPortfolio</div>
        <div className="flex gap-4 bg-transparent p-3">
          <Button className="bg-transparent cursor-pointer">Home</Button>
          <Button className="bg-transparent cursor-pointer">About</Button>
          <Button className="bg-transparent cursor-pointer">Skills</Button>
          <Button className="bg-transparent cursor-pointer">Projects</Button>
          <Button className="bg-transparent cursor-pointer">Contact</Button>
        </div>
        <div className="text-2xl font-semibold p-3 w-[142px]">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};
