"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { X } from "@phosphor-icons/react";
interface Drawer {
  triger: React.ReactNode;
  content: React.ReactNode;
  Description: string;
  Title: string;
}

const MyDrawer: React.FC<Drawer> = ({
  triger,
  content,
  Description,
  Title,
}) => {
  return (
    <div className="h-fit">
      <Drawer>
        <DrawerTrigger>{triger}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="flex items-center justify-between">
            <div>
              <DrawerTitle>{Title}</DrawerTitle>
              <DrawerDescription>{Description}</DrawerDescription>
            </div>
            <DrawerClose>
              <Button variant="outline">
                <X size={16} />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          {content}
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MyDrawer;
