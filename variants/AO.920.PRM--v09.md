// Canvas: ELos Insights Dashboard UI (Visual Analytics Layer)
// File: ELOS.UI.Dashboard
// Integrated with: AO.920.PRM.AdaptiveStack + Stargate usage trends + prompt ratings

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, HeatMapChart } from "recharts";
import { Button } from "@/components/ui/button";

const fetchInsights = async () => {
  const agent = window.ELosModules["AO.920.PRM.AdaptiveStack"];
  return agent ? agent.getAdvancedData() : { updates: [], ratings: [], history: [], heatmap: [], roles: {}, categories: {} };
};

export default function ELosInsightsDashboard() {
  const [data, setData] = useState({ updates: [], ratings: [], history: [], heatmap: [], roles: {}, categories: {} });

  useEffect(() => {
    fetchInsights().then(setData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📊 ELos Insights Dashboard</h2>
      <Tabs defaultValue="updates">
        <TabsList className="mb-4">
          <TabsTrigger value="updates">📆 Update Log</TabsTrigger>
          <TabsTrigger value="ratings">⭐ Prompt Ratings</TabsTrigger>
          <TabsTrigger value="history">🧠 Prompt Usage</TabsTrigger>
          <TabsTrigger value="heatmap">🔥 Usage Heatmap</TabsTrigger>
          <TabsTrigger value="roles">🧬 Role Distribution</TabsTrigger>
          <TabsTrigger value="categories">🏷️ Top Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="updates">
          <Card><CardContent>
            <h3 className="font-semibold mb-2">Prompt Update Frequency</h3>
            <LineChart width={600} height={300} data={data.updates.map((u, i) => ({
              name: `Batch ${i + 1}`,
              prompts: u.batchSize,
              timestamp: new Date(u.timestamp).toLocaleDateString()
            }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="prompts" stroke="#8884d8" name="Prompt Count" />
            </LineChart>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="ratings">
          <Card><CardContent>
            <h3 className="font-semibold mb-2">Prompt Ratings</h3>
            <ul className="space-y-2">
              {data.ratings.map((r, i) => (
                <li key={i} className="border p-2 rounded">
                  <p><strong>Prompt ID:</strong> {r.promptId}</p>
                  <p><strong>Score:</strong> {r.score}/10</p>
                  <p><strong>Comment:</strong> {r.comment || "None"}</p>
                  <p className="text-xs text-muted-foreground">{new Date(r.timestamp).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="history">
          <Card><CardContent>
            <h3 className="font-semibold mb-2">Prompt Usage History</h3>
            <ul className="space-y-2">
              {data.history.map((h, i) => (
                <li key={i} className="border p-2 rounded">
                  <p><strong>Prompt ID:</strong> {h.promptId}</p>
                  <p><strong>Role Hint:</strong> {h.roleHint}</p>
                  <p><strong>Task Type:</strong> {h.taskType}</p>
                  <p className="text-xs text-muted-foreground">{new Date(h.timestamp).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="heatmap">
          <Card><CardContent>
            <h3 className="font-semibold mb-2">Hourly Usage Heatmap</h3>
            {/* Placeholder — to be connected to actual heatmap charting tool */}
            <pre className="text-sm text-muted-foreground">[Heatmap Chart Placeholder]</pre>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="roles">
          <Card><CardContent>
            <h3 className="font-semibold mb-2">Most Active Roles</h3>
            <BarChart width={600} height={300} data={Object.entries(data.roles).map(([role, count]) => ({ role, count }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="role" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="categories">
          <Card><CardContent>
            <h3 className="font-semibold mb-2">Top Prompt Categories</h3>
            <BarChart width={600} height={300} data={Object.entries(data.categories).map(([cat, count]) => ({ cat, count }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="cat" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#ffc658" />
            </BarChart>
          </CardContent></Card>
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <Button onClick={() => fetchInsights().then(setData)}>
          🔄 Refresh Dashboard
        </Button>
      </div>
    </div>
  );
}

// Register in sidebar menu
window.ELosMenu = window.ELosMenu || [];
window.ELosMenu.push({
  label: "📊 Insights Dashboard",
  component: ELosInsightsDashboard,
  route: "/insights"
});