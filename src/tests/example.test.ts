import request from "supertest";
import { app } from "../index";

describe("sum function", () => {
  it("should return health check of api", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
