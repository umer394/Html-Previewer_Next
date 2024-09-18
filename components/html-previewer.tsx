"use client";
import React,{useState,ChangeEvent} from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { predefinedHtml } from "./prviewerHtml";

export default function HtmlPreviewer(){
    const [htmlCode,setHtmlCode] = useState<string>("")
    const [previewerHtml,setPreviewerHtml] = useState<string>("")

    const handlePreview =():void => {
        setPreviewerHtml(htmlCode)
    }

    const handlePasteHtml=():void =>{
        setHtmlCode(predefinedHtml)
    }

    const handleChange = (e:ChangeEvent<HTMLTextAreaElement>) :void => {
        setHtmlCode(e.target.value)
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-background text-foreground">
            <div className="w-full max-w-2xl  bg-card p-6 rounded-lg shadow-lg">
                <h1 className="font-bold text-2xl text-center mb-4">HTML Previewer</h1>
                <p className="text-muted-foreground mb-4 text-center">Enter your html code and see the preview</p>
                <div className="grid gap-4">
                    <Textarea
                    value={htmlCode}
                    onChange={handleChange}
                    placeholder="Enter your HTML code here..."
                    rows={8}
                    className="p-4 rounded-lg border border-input bg-background text-foreground"
                    />
                    <div className="flex justify-center">
                        <div className="flex gap-2">
                            <Button onClick={handlePreview}>Generate Preview</Button>
                            <Button onClick={handlePasteHtml}>Paste HTML</Button>
                        </div>
                    </div>
                    <div className="p-4 rounded-lg border border-input bg-background text-foreground">
                        <div dangerouslySetInnerHTML={{ __html:previewerHtml}}/>
                    </div>
                </div>
            </div>

        </div>
    )
}