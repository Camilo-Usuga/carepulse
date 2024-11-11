import * as sdk from "node-appwrite";
import dotenv from "dotenv";

dotenv.config();

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1"!)
  .setProject("671721190039176df566"!)
  .setKey(
    "standard_a2b37f76ed544340835cf439b66ab27a183fade6b140d70ed2a20fad213bf01431c7d9152e6bf7911a5978abeea557ef0f5aaa0cc64287b108866d55b6b8e690052003dfac8e8ed3c57ac48733d6e8f6f14b436c5a0fe1b0546c20809b5a5e833cc66fe1aeee5ec60f50b055cc632c099a37d807d5be54641d783ae778075dc2"!
  );

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
