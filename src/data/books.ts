export type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  level: string;
  cover: string;
  featured?: boolean;
};

export const books: Book[] = [
  {
    id: 1,
    title: "Iya Abeni: The Saucy Woman",
    author: "Deborah Oludele",
    category: "Literary",
    level: "General",
    cover: "/books/abenii.jpg",
    featured: true,
  },

  {
    id: 2,
    title: "Physical and Health Education for J.S.S 1",
    author: "Falaye Elijah Kayode & Chukwudi Chinaka Asaga",
    category: "Textbooks",
    level: "J.S.S 1",
    cover: "/books/health.jpg",
    featured: true,
  },

  {
    id: 3,
    title: "My Doll & Other Stories",
    author: "Deborah Oludele",
    category: "Literary",
    level: "Primary",
    cover: "/books/doll.jpg",
    featured: true,
  },

  {
    id: 4,
    title: "LUMINOUS Social & Citizenship Studies",
    author: "Ajayi Olawale J.Agbaje O., Ofoegbu Chaibuotu",
    category: "Educational",
    level: "J.S.S 1",
    cover: "/books/civic.jpg",
    featured: true,
  },

  {
    id: 5,
    title: "Digital Technologies",
    author: "Chukwudi Chinaka Asaga, Omotayo Gati",
    category: "Textbooks",
    level: "J.S.S 1",
    cover: "/books/computer.jpg",
    featured: true,
  },

  {
    id: 6,
    title: "LUMINOUS Mathematics",
    author: "Abubakar siddiq M., Alanamu Musa A., Ishola Sikiru o., Olushola Joseph A., Samuel M. Umeaku",
    category: "Textbooks",
    level: "J.S.S 2",
    cover: "/books/math.jpg",
    featured: true,
  },

  {
    id: 7,
    title: "Story of Two Daughters",
    author: "Deborah Oludele",
    category: "Literary",
    level: "General",
    cover: "/books/two.jpg",
  },

  {
    id: 8,
    title: "Monica & The Lion",
    author: "Deborah Oludele",
    category: "Literary",
    level: "General",
    cover: "/books/monica.jpg",
  },

  {
    id: 9,
    title: "Tope The Serious Pupil",
    author: "Deborah Oludele",
    category: "Literary",
    level: "General",
    cover: "/books/tope.jpg",
  },

  {
    id: 10,
    title: "Discontented Cricket Killed Itself",
    author: "Deborah Oludele",
    category: "Literary",
    level: "General",
    cover: "/books/kill.jpg",
  },

  {
    id: 11,
    title: "Can Ben Bend",
    author: "Deborah Oludele",
    category: "Literary",
    level: "General",
    cover: "/books/ben.jpg",
  },

  {
    id: 12,
    title: "Bat, vip & bil",
    author: "Sulaimon Alimat Taiwo",
    category: "Literary",
    level: "General",
    cover: "/books/bat.jpg",
  },

  {
    id: 13,
    title: "Book Title 13",
    author: "Author Name",
    category: "Educational",
    level: "Secondary",
    cover: "/books/book-13.webp",
  },

  {
    id: 14,
    title: "Book Title 14",
    author: "Author Name",
    category: "Textbooks",
    level: "J.S.S 3",
    cover: "/books/book-14.webp",
  },

  {
    id: 15,
    title: "Book Title 15",
    author: "Author Name",
    category: "Children's Books",
    level: "Primary",
    cover: "/books/book-15.webp",
  },

  {
    id: 16,
    title: "Book Title 16",
    author: "Author Name",
    category: "Literary",
    level: "General",
    cover: "/books/book-16.webp",
  },

  {
    id: 17,
    title: "Book Title 17",
    author: "Author Name",
    category: "Textbooks",
    level: "S.S.S 1",
    cover: "/books/book-17.webp",
  },

  {
    id: 18,
    title: "Book Title 18",
    author: "Author Name",
    category: "Educational",
    level: "S.S.S 1",
    cover: "/books/book-18.webp",
  },

  {
    id: 19,
    title: "Book Title 19",
    author: "Author Name",
    category: "Textbooks",
    level: "S.S.S 2",
    cover: "/books/book-19.webp",
  },

  {
    id: 20,
    title: "Book Title 20",
    author: "Author Name",
    category: "Children's Books",
    level: "Primary",
    cover: "/books/book-20.webp",
  },

  {
    id: 21,
    title: "Book Title 21",
    author: "Author Name",
    category: "Literary",
    level: "General",
    cover: "/books/book-21.webp",
  },

  {
    id: 22,
    title: "Book Title 22",
    author: "Author Name",
    category: "Textbooks",
    level: "S.S.S 2",
    cover: "/books/book-22.webp",
  },

  {
    id: 23,
    title: "Book Title 23",
    author: "Author Name",
    category: "Educational",
    level: "Secondary",
    cover: "/books/book-23.webp",
  },

  {
    id: 24,
    title: "Book Title 24",
    author: "Author Name",
    category: "Textbooks",
    level: "S.S.S 3",
    cover: "/books/book-24.webp",
  },

  {
    id: 25,
    title: "Book Title 25",
    author: "Author Name",
    category: "Children's Books",
    level: "Primary",
    cover: "/books/book-25.webp",
  },

  {
    id: 26,
    title: "Book Title 26",
    author: "Author Name",
    category: "Literary",
    level: "General",
    cover: "/books/book-26.webp",
  },

  {
    id: 27,
    title: "Book Title 27",
    author: "Author Name",
    category: "Educational",
    level: "Secondary",
    cover: "/books/book-27.webp",
  },

  {
    id: 28,
    title: "Book Title 28",
    author: "Author Name",
    category: "Textbooks",
    level: "Primary",
    cover: "/books/book-28.webp",
  },

  {
    id: 29,
    title: "Book Title 29",
    author: "Author Name",
    category: "Children's Books",
    level: "Primary",
    cover: "/books/book-29.webp",
  },

  {
    id: 30,
    title: "Book Title 30",
    author: "Author Name",
    category: "Literary",
    level: "General",
    cover: "/books/book-30.webp",
  },
];