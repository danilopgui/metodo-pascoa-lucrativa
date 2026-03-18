import ebookPreview1 from "@/assets/ebook-preview-1.png";

const EbookPreviewStrip = () => {
  return (
    <section className="py-10 md:py-14 bg-cream-dark">
      <div className="container flex justify-center">
        <img
          src={ebookPreview1}
          alt="Ebook Método Páscoa Lucrativa - capa e sumário"
          className="w-full max-w-md rounded-xl shadow-lg"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default EbookPreviewStrip;
