"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { createArticle } from "@/actions/article";
import { LoaderCircle } from "lucide-react";

type Props = {
  trigger: React.ReactNode;
  title: string;
};

const Modal = ({ trigger, title }: Props) => {
  const [articleTitle, setArticleTitle] = useState<string>("");
  const [articleDescription, setArticleDescription] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      await createArticle({
        articleTitle,
        articleDescription,
      }).then(() => {
        setArticleTitle("");
        setArticleDescription("");
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-[500px] h-[400px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={articleTitle}
              onChange={(e) => setArticleTitle(e.target.value)}
              placeholder="Article title"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              value={articleDescription}
              onChange={(e) => setArticleDescription(e.target.value)}
              placeholder="Article details"
              className="col-span-3 h-[10rem] resize-none"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleClick}
            disabled={!articleTitle || !articleDescription}
          >
            {loading ? <LoaderCircle className="animate-spin" /> : "Create"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
