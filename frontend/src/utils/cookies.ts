/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Устанавливает куки с указанным именем, значением и опциями.
 *
 * @param name - Имя куки.
 * @param value - Значение куки.
 * @param options - Дополнительные параметры, такие как срок действия, путь и домен.
 */
export function setCookie(
  name: string,
  value: string,
  options: Record<string, any> = {},
): void {
  options = {
    /** Путь по умолчанию. */
    path: "/",
    /** другие параметры по умолчанию можно добавить здесь. */
    ...options,
  };

  /** Если параметр expires является объектом Date, преобразуем его в строку. */
  if (options.expires instanceof Date)
    options.expires = options.expires.toUTCString();

  /** Кодируем имя и значение куки. */
  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  /** Добавляем остальные опции. */
  for (const optionKey in options) {
    updatedCookie += "; " + optionKey;

    const optionValue = options[optionKey];

    if (optionValue !== true) updatedCookie += "=" + optionValue;
  }

  /** Устанавливаем куки. */
  document.cookie = updatedCookie;
}

/**
 * Получает значение куки по его имени.
 *
 * @param name - Имя куки.
 *
 * @returns Значение куки или undefined, если куки с таким именем не существует.
 */
export function getCookie(name: string): string | undefined {
  /** Регулярное выражение для поиска куки по имени. */
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        encodeURIComponent(name).replace(/[-.+*]/g, "\\$&") +
        "=([^;]*)",
    ),
  );
  /** Возвращаем значение куки или undefined, если куки не найдены. */
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

/**
 * Удаляет куку с указанным именем.
 *
 * @param name - Имя куки для удаления.
 */
export function deleteCookie(name: string): void {
  /** Устанавливаем значение куки как пустую строку. */
  setCookie(name, "", {
    /** Устанавливаем срок действия куки в прошлом. */
    expires: new Date(0).toUTCString(),
  });
}
