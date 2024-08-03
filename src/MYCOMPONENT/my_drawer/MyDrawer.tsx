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
import FormPublish from "@/features/story/publish/formPublish";
import { InitialValue } from "@/features/story";

const Publish = ({ title, story }: InitialValue) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button className="bg-green-400 text-sm text-white">Publish</Button>
      </DrawerTrigger>
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

        <FormPublish title={title} story={story} />

        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Publish;
