"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { createArticle } from "@/actions/article";

export function AddArticleModal() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const handleClick = async () => {
    const { status } = await createArticle({ title, description });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add new article</Button>
      </DialogTrigger>
      <DialogContent className="w-[800px] h-[80%]">
        <DialogHeader>
          <DialogTitle>Details of new article</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Title</Label>
            <Input
              id="name"
              value={title}
              placeholder="Blog title"
              className="col-span-3"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Content
            </Label>
            <Textarea
              placeholder="Blog details"
              className="col-span-3 h-[250px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => handleClick}
            type="submit"
            disabled={!title || !description}
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
