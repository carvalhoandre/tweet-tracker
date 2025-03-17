export default function getAuthor(author_name) {
  if (!author_name || author_name.toLowerCase() === 'unknown') return 'Desconhecido';

  return author_name;
}
