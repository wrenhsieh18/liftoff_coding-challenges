package Class_3.src.com.company;

import java.util.ArrayList;

public class FirstReverse {

    public static String FirstReverse(String str) {
        String resultStr = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            resultStr += str.charAt(i);
        }
        return resultStr;
    }
}
