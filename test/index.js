import test from "tape"
import feathersjsMongooseI18nSlugs from "../src"

test("feathersjsMongooseI18nSlugs", (t) => {
  t.plan(1)
  t.equal(true, feathersjsMongooseI18nSlugs(), "return true")
})
