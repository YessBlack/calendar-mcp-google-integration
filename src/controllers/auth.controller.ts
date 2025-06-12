import { Request, Response } from "express";
import { oauth2Client } from "../config/auth2";

export const redirectToGoogle = (req: Request, res: Response) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/calendar.events"],
  });
  res.redirect(authUrl);
};

export const googleCallback = async (req: Request, res: Response) => {
  try {
    const { tokens } = await oauth2Client.getToken(req.query.code as string);
    oauth2Client.setCredentials(tokens);

    console.log("Access Token:", tokens.access_token);
    console.log("Refresh Token:", tokens.refresh_token);

    res.send("Autenticación completada. Puedes cerrar esta ventana.");
  } catch (error) {
    console.error("Error en el callback:", error);
    res.status(500).send("Error en la autenticación");
  }
};
