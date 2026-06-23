const safeDecode = (value) => {
    try {
        return decodeURIComponent(value);
    } catch {
        return value || '';
    }
};

export const normalizeCategoryLabel = (value) => (value || '').toString().trim();

export const createCategorySlug = (value) => {
    const normalized = normalizeCategoryLabel(value)
        .toLowerCase()
        .replace(/\s+/g, '-');

    return encodeURIComponent(normalized);
};

export const buildAppPath = (path = '/') => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

    if (!path || path === '/') {
        return normalizedBase;
    }

    return `${normalizedBase}${path.replace(/^\/+/, '')}`;
};

export const getRoutePathFromLocation = (pathname = window.location.pathname) => {
    const baseUrl = import.meta.env.BASE_URL || '/';

    if (baseUrl === '/') {
        return pathname || '/';
    }

    const basePrefix = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

    if (!pathname.startsWith(basePrefix)) {
        return pathname || '/';
    }

    return pathname.slice(basePrefix.length) || '/';
};

export const resolveCategoryLabelFromSlug = (slug, categoryLabels = []) => {
    const normalizedSlug = createCategorySlug(safeDecode(slug));
    const matchedLabel = categoryLabels.find((label) => createCategorySlug(label) === normalizedSlug);

    if (matchedLabel) {
        return matchedLabel;
    }

    return safeDecode(slug).replace(/-/g, ' ').trim();
};