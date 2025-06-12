import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createCalendarEvent } from "./services/calendar.service";

// Create server
const server = new McpServer({
  name: "calendar",
  version: "1.0.0",
});

// define tools
server.tool(
  "schedule_meeting",
  "Schedule a meeting using google calendar",
  {
    title: z.string().describe("Meeting title"),
    start_date: z.string().describe("Meeting start date"),
    end_date: z.string().describe("Meeting end date"),
    participants: z.array(z.string()).describe("Meeting participants"),
    accessToken: z.string().describe("Google access token"),
    description: z.string().describe("Meeting description"),
    location: z.string().describe("Meeting location"),
  },
  async ({
    title,
    start_date,
    end_date,
    participants,
    accessToken,
    description,
    location,
  }) => {
    try {
      const event = {
        summary: title,
        start: { dateTime: start_date },
        end: { dateTime: end_date },
        attendees: participants.map((participant) => ({
          email: participant,
        })),
        description: description,
        location: location,
      };

      await createCalendarEvent(accessToken, event);

      return {
        content: [
          {
            type: "text",
            text: `Reunión "${title}" agendada para el ${start_date} a las ${end_date} con ${participants.join(
              ", "
            )}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error al agendar la reunión: ${error.message}`,
          },
        ],
      };
    }
  }
);

// listen connection
const transport = new StdioServerTransport();
await server.connect(transport);
