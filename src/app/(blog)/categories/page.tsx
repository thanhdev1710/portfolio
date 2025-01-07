import BreadcrumbCus from "@/components/shared/BreadcrumbCus";
import Tag from "@/components/shared/Hashtag";
import { GetAllCategories } from "@/services/Tag";

export default async function Page() {
  const { data } = await GetAllCategories();

  return (
    <>
      <BreadcrumbCus
        urls={[
          { label: "Trang chủ", url: "/blogs" },
          { label: "Thể loại", url: "/categories" },
        ]}
      />
      <h1 className="my-4 font-bold md:text-4xl text-2xl">
        Các thể loại phổ biến
      </h1>
      <section className="flex flex-wrap gap-8">
        {data.map((category) => (
          <div className="relative group" key={category.name}>
            <div
              className={`absolute -top-4 -left-4 transition-all duration-500  ${
                category.countBlog > 100
                  ? "bg-red-400 border-2 border-red-300 group-hover:bg-red-600"
                  : "bg-blue-400 border-2 border-blue-300 group-hover:bg-blue-600"
              }  text-white rounded-full size-10 flex items-center justify-center text-xs`}
            >
              {category.countBlog > 100 ? "100+" : category.countBlog}
            </div>
            <Tag
              title="categories"
              className={`px-6 py-4 h-full transition-all duration-500 text-xl text-white w-full ${
                category.countBlog > 100
                  ? "bg-red-400 group-hover:bg-red-600"
                  : "bg-blue-400 group-hover:bg-blue-600"
              }`}
              label={category.name}
              url={category.name}
            />
          </div>
        ))}
      </section>
    </>
  );
}
