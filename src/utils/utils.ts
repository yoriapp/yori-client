const transformToParam = (text: string): string => 
    text.replace(/[^\w\s]/gi, '').toLowerCase().replace(/\s+/g, '-');

export { transformToParam };