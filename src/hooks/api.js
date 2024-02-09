import { useState, useCallback } from "react";
import { toast } from "react-toastify";

async function sendtToApi(path, method="GET", data=null) {
    try {
        const url = `${process.env.REACT_APP_API_URL}/${path}`;
        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };
        if (data) {
            options.body = JSON.stringify(data);
        }
        const response = await fetch(url, options);
        const result = await response.json();
        if (response.status !== 200) {
            throw new Error(result.message);
        }
        return result
    } catch (e) {
        console.error(e);
        throw new Error(e);
    }
}
export function useSendStayInTheKnow({
    onError,
    callBack
}) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const sendStayInTheKnow = useCallback(async (email) => {
        if(!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ) {
            toast.error("Invalid Email");
            return;
        }

        setIsLoading(true);
        try {
            const result = await sendtToApi("user/stay-in-the-know", "POST", { email });
            toast.success("Added to our newsletter");
            if (callBack) {
                callBack(result);
            }
        } catch (e) {
            toast.error(e.message || "Failed to add to our newsletter");
            setError(e);
            if (onError) {
                onError(e);
            }
        } finally {
            setIsLoading(false);
        }
    }, [onError, callBack]);

    return {
        isLoading,
        error,
        sendStayInTheKnow
    }
}

export function useRequestCallBack({
    onError, callBack
}) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const requestCallBack = useCallback(async (data) => {
        for (const key in data) {
            if (typeof data[key] !== "boolean" && !data[key]) {
                toast.error(`Please fill in ${formatFieldName(key)}`);
                return;
            }
        }
        setIsLoading(true);
        try {
            const result = await sendtToApi("user/request-call-back", "POST", data);
            toast.success("Request for call back sent successfully");
            if (callBack) {
                callBack(result);
            }
        } catch (e) {
            toast.error(e.message || "Failed to add to our newsletter");
            setError(e);
            if (onError) {
                onError(e);
            }
        } finally {
            setIsLoading(false);
        }
    }, [onError, callBack]);

    return {
        isLoading,
        error,
        requestCallBack
    }
}


function formatFieldName(name) {
    return name.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}