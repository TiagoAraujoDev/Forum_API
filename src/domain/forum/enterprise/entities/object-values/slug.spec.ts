import { Slug } from "./slug";

test("create a slug", () => {
  const slug = Slug.createFromText("An testing example");

  expect(slug.value).toEqual("an-testing-example");
});
