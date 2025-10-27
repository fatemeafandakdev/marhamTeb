import React from 'react';



export default function ProblemCard({ id, type, img, title, description }) {
  return (
    <article
      key={id}
      className="group max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">

      
      <div className="relative h-44 w-full overflow-hidden bg-gray-50">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-110"
        />

    
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold leading-tight mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
        
          <button className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-medium">بیشتر بخوانید</button>
        </div>
      </div>
    </article>
  );
}


// ---------------------------
// Demo usage (optional)
// ---------------------------
// Example: render a small grid of ProblemCard components.
export function ProblemCardGrid({ items = [] }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it) => (
        <ProblemCard
          key={it.id}
          id={it.id}
          type={it.type}
          img={it.img}
          title={it.title}
          description={it.description}
        />
      ))}
    </section>
  );
}

