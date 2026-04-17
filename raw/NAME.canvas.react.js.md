import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function ELoSCanvas() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    const res = await fetch("/api/elos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResponse(data.output);
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-4 rtl text-right">
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-bold">ברוך הבא ל־ELoS</h2>
          <p className="text-muted-foreground text-sm">כתוב כאן את ההנחיה שלך בעברית</p>
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="לדוגמה: תן לי רעיון לפוסט על חגים"
            className="text-right"
          />
          <Button onClick={handleSend} disabled={loading} className="w-full">
            {loading ? "ממתין לתשובה..." : "שלח"}
          </Button>
          {response && (
            <div className="mt-4 border-t pt-4 text-base whitespace-pre-wrap">
              {response}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}