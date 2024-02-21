import { TaskInterface } from "../types/typesTaskData";

const ApiUrl = "https://api.hh.ru/";

const enum methodsEnum {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
}

type methods = methodsEnum.GET;

const requestOptions = <T>(requestBody: T, method: methods) => {
  const createRequestOptions = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  };
  return createRequestOptions;
};

export const FetchTaskByUsername = async (): Promise<TaskInterface[]> => {
  try {
    const response = await fetch(
      `${ApiUrl}vacancies?only_with_salary=true&text=react`
    ).then((res) => res.json());
    return response;
  } catch (error) {
    throw error;
  }
};
