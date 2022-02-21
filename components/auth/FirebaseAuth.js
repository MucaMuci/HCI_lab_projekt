import { initFirebase } from "../firebase/initFirebase";
import { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUserCookie } from '@/lib/firebase/userCookies'
import { mapUserData } from '@/lib/firebase/mapUserData'

initFirebase();

const auth = getAuth();

