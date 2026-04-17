import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Canvas() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const runPrompt = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input })
      });
      const data = await res.json();
      setOutput(data.output);
    } catch (err) {
      setOutput("Error processing prompt.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <div className="max-w-4xl mx-auto grid gap-6">
        <Card>
          <CardContent className="p-4">
            <Textarea
              placeholder="Enter your prompt..."
              className="bg-black text-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={6}
            />
            <Button onClick={runPrompt} className="mt-4 w-full" disabled={loading}>
              {loading ? "Running..." : "Run Prompt"}
            </Button>
          </CardContent>
        </Card>

        {output && (
          <Card>
            <CardContent className="p-4 whitespace-pre-wrap bg-black text-green-300">
              {output}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}