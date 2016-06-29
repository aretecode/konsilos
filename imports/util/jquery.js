const getTagOrphanTextOnly = $el => $el.clone().children().remove().end().text().trim();
export { getTagOrphanTextOnly }
