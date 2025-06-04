import { Product } from "@/types";
import { categories, inputs } from "@/utils/constants";
import { FC } from "react";
import Field from "./field";
import ImagePreview from "./image-preview";

interface Props {
  product: Product | null;
}

const ProductForm: FC<Props> = ({ product }) => {
  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Sol Sütun */}
        <div className="space-y-6">
          {inputs.map((input, key) => (
            <Field key={key} htmlFor={input.name} label={input.label}>
              <input
                id={input.name}
                type={input.type}
                className="input"
                required
                defaultValue={product?.[input.name as keyof Product] || ""}
              />
            </Field>
          ))}

          {/* Kategori Inputu */}
          <Field htmlFor="category" label="Kategori">
            <select
              name="category"
              id="category"
              className="input"
              required
              defaultValue={product?.category}
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        {/* Sağ Sütun */}
        <div className="space-y-6">
          {/* Resim Inputu */}
          <Field htmlFor="image_url" label="Resim URL">
            <input
              type="text"
              name="image_url"
              id="image_url"
              className="input"
              required
              defaultValue={product?.image_url}
            />
          </Field>

          <ImagePreview />

          {/* Açıklama Inputu*/}
          <Field htmlFor="description" label="Açıklama">
            <textarea
              name="description"
              id="description"
              className="input sm:text-sm md:min-h-[220px]"
              required
              defaultValue={product?.description}
              rows={5}
            ></textarea>
          </Field>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="px-6 py-2 rounded-md text-white transition-colors bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 cursor-pointer disabled:cursor-not-allowed"
        >
          {product ? "Güncelle" : "Oluştur"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
