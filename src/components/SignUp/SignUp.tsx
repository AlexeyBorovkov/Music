"use client"

import styles from "./signup.module.css"
import Image from "next/image"
import { useState } from "react"
import { signup } from "@/store/features/userSlice"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "@/utils/hooks"

export function Signup() {
  const error = useAppSelector((state) => state.user?.error); // Используем опциональное связывание
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    passwordTwo: "",
  });

  const onChangedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValue(prev => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Проверка на наличие всех полей
    if (!inputValue.email || !inputValue.password || !inputValue.passwordTwo) {
      alert('Введите все данные для регистрации');
      return;
    }
    
    // Проверка на совпадение паролей
    if (inputValue.password !== inputValue.passwordTwo) {
      alert('Оба пароля должны совпадать');
      return;
    }

    try {
      await dispatch(signup(inputValue)).unwrap();
      router.push("/login");
    } catch (err) {
      // Вывод ошибки в консоль и отображение пользователю
      console.error("Ошибка регистрации:", err);
      alert('Ошибка регистрации. Попробуйте еще раз.');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSignup}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin}>
            <Link href="/tracks">
              <div className={styles.modalLogo}>
                <Image alt="logo" src="/img/logo_modal.png" width={140} height={21} />
              </div>
            </Link>
            <input
              onChange={onChangedInput}
              className={styles.modalInput}
              value={inputValue.email}
              name="email"
              placeholder="Почта"
              type="text"
            />
            <input
              onChange={onChangedInput}
              className={styles.modalInput}
              value={inputValue.password}
              name="password"
              placeholder="Пароль"
              type="password"
            />
            <input
              onChange={onChangedInput}
              className={styles.modalInput}
              value={inputValue.passwordTwo}
              name="passwordTwo"
              placeholder="Повторите пароль"
              type="password"
            />
            {/* Отображение ошибки */}
            {error && <p className={styles.error}>{error}</p>}
            <button
              onClick={handleSignUp}
              className={styles.modalBtnSignupEnt}
            >
              <span>Зарегистрироваться</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}