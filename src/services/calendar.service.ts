import dotenv from "dotenv";

dotenv.config();

export async function createCalendarEvent(accessToken: string, event: any) {
  try {
    const response = await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Error al crear el evento:", data);
      throw new Error(data.error?.message || "No se pudo crear el evento");
    }

    console.log("Evento creado exitosamente:", data);
    return data;
  } catch (error: any) {
    console.error("Excepción al crear el evento:", error.message);
    throw error;
  }
}
