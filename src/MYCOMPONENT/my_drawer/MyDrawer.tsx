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
}

const MyDrawer: React.FC<Drawer> = ({ triger, content }) => {
  return (
    <Drawer>
      <DrawerTrigger>{triger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex items-center justify-between">
          <div>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
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
  );
};

export default MyDrawer;
