import { ISummaryAction, ISummaryState } from "@/components/main/summary-form/page";
import { Dispatch } from "react";

export const request = {
  GET: async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) return;

    return response.json();
  },
  POST2: async (url: string, payload: object) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok || !response.body) return;

    return response.json();
  },
  POST: async (
    url: string,
    payload: string,
    state: ISummaryState,
    dispatch: Dispatch<ISummaryAction>,
  ) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload }),
    });

    if (!response.ok || !response.body) return;

    let chatResponse = "";

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    dispatch({ type: "SET_IS_STREAMING", payload: false})

    while (true) {
      const { value, done } = await reader.read();
      const text = decoder.decode(value);

      dispatch({ type: "SET_SUMMARIZED_TEXT", payload: text});

      if (done) {
        dispatch({ type: "SET_IS_STREAMING", payload: false})
        break;
      }
    }

    return { chatResponse };
  },
};
