"use client";
import React, { useState } from "react";
import { Input, Button } from "@headlessui/react";
import { useMutation } from "@tanstack/react-query";
import { checkApiKey } from "../services/weatherServices";
import { toast } from "react-toastify";

const LoginForm = ({ setApiKey }) => {
  const [inputKey, setInputKey] = useState("");

  // useMutation hook'u ile API isteği yapılıyor.
  const mutation = useMutation({
    mutationFn: checkApiKey,
    onSuccess: (data) => {
        toast.success("Giriş Başarılı")
      // Eğer istek başarılı olursa API key'i kaydediyoruz
      setApiKey(inputKey);
    },
    onError: (error) => {
      // Eğer hata varsa, kullanıcıya hata mesajı gösteriyoruz.
      console.error(error);
      toast.error("API Anahtarınız geçersiz. Lütfen tekrar deneyin.")
    //   alert("API Anahtarınız geçersiz. Lütfen tekrar deneyin.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputKey.trim() !== "") {
      // API key doğrulama isteği başlatılıyor.
      mutation.mutate(inputKey);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen items-center justify-center gap-10 md:gap-0">
      <div className="md:w-1/2 flex items-center justify-center ">
        <img src="/images/Orbina.png" alt="Orbina" />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <Input
            type="text"
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            placeholder="API Key'inizi girin"
            className="text-xl w-72 md:w-96 border-2 border-gray-600 p-2 rounded mb-4 focus:ring-2 focus:ring-blue-500"
          />
          <Button
            type="submit"
            disabled={mutation.isLoading}
            className="text-2xl bg-white ring-gray-500 text-blue-500 p-2 rounded hover:bg-gray-200 focus:ring-2 focus:ring-blue-300 focus:outline-none px-5 py-2"
          >
            {mutation.isLoading ? "Yükleniyor..." : "Giriş Yap"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
