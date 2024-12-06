"use server";
import { db } from "@/lib/database/db";

export async function getOrganisation() {
  try {
    return await db.selectFrom("organisation").selectAll().execute();
  } catch (error) {
    return "Error getting org";
  }
}