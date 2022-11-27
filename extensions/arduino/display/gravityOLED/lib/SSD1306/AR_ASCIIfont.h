#ifndef AR_ASCIIfont_H
#define AR_ASCIIfont_H
#include "Arduino.h"

#ifdef AVR
const uint8_t ascii_8_16[][16] PROGMEM  = {
#else
const uint8_t ascii_8_16[][16] = {
#endif

/*" "*/ {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0},
/*"!"*/ {0,0,24,60,60,60,24,24,24,0,24,24,0,0,0,0},
/*"\"*/ {0,99,99,99,34,0,0,0,0,0,0,0,0,0,0,0},
/*"#"*/ {0,0,0,54,54,127,54,54,54,127,54,54,0,0,0,0},
/*"$"*/ {12,12,62,99,97,96,62,3,3,67,99,62,12,12,0,0},
/*"%"*/ {0,0,0,0,0,97,99,6,12,24,51,99,0,0,0,0},
/*"&"*/ {0,0,0,28,54,54,28,59,110,102,102,59,0,0,0,0},
/*"'"*/ {0,48,48,48,96,0,0,0,0,0,0,0,0,0,0,0},
/*"("*/ {0,0,12,24,24,48,48,48,48,24,24,12,0,0,0,0},
/*")"*/ {0,0,24,12,12,6,6,6,6,12,12,24,0,0,0,0},
/*"*"*/ {0,0,0,0,66,102,60,255,60,102,66,0,0,0,0,0},
/*"+"*/ {0,0,0,0,24,24,24,255,24,24,24,0,0,0,0,0},
/*","*/ {0,0,0,0,0,0,0,0,0,0,24,24,24,48,0,0},
/*"-"*/ {0,0,0,0,0,0,0,255,0,0,0,0,0,0,0,0},
/*"."*/ {0,0,0,0,0,0,0,0,0,0,24,24,0,0,0,0},
/*"/"*/ {0,0,1,3,7,14,28,56,112,224,192,128,0,0,0,0},
/*"0"*/ {0,0,62,99,99,99,107,107,99,99,99,62,0,0,0,0},
/*"1"*/ {0,0,12,28,60,12,12,12,12,12,12,63,0,0,0,0},
/*"2"*/ {0,0,62,99,3,6,12,24,48,97,99,127,0,0,0,0},
/*"3"*/ {0,0,62,99,3,3,30,3,3,3,99,62,0,0,0,0},
/*"4"*/ {0,0,6,14,30,54,102,102,127,6,6,15,0,0,0,0},
/*"5"*/ {0,0,127,96,96,96,126,3,3,99,115,62,0,0,0,0},
/*"6"*/ {0,0,28,48,96,96,126,99,99,99,99,62,0,0,0,0},
/*"7"*/ {0,0,127,99,3,6,6,12,12,24,24,24,0,0,0,0},
/*"8"*/ {0,0,62,99,99,99,62,99,99,99,99,62,0,0,0,0},
/*"9"*/ {0,0,62,99,99,99,99,63,3,3,6,60,0,0,0,0},
/*":"*/ {0,0,0,0,0,24,24,0,0,0,24,24,0,0,0,0},
/*";"*/ {0,0,0,0,0,24,24,0,0,0,24,24,24,48,0,0},
/*"<"*/ {0,0,0,6,12,24,48,96,48,24,12,6,0,0,0,0},
/*"="*/ {0,0,0,0,0,0,126,0,0,126,0,0,0,0,0,0},
/*">"*/ {0,0,0,96,48,24,12,6,12,24,48,96,0,0,0,0},
/*"?"*/ {0,0,62,99,99,6,12,12,12,0,12,12,0,0,0,0},
/*"@"*/ {0,0,62,99,99,111,107,107,110,96,96,62,0,0,0,0},
/*"A"*/ {0,0,8,28,54,99,99,99,127,99,99,99,0,0,0,0},
/*"B"*/ {0,0,126,51,51,51,62,51,51,51,51,126,0,0,0,0},
/*"C"*/ {0,0,30,51,97,96,96,96,96,97,51,30,0,0,0,0},
/*"D"*/ {0,0,124,54,51,51,51,51,51,51,54,124,0,0,0,0},
/*"E"*/ {0,0,127,51,49,52,60,52,48,49,51,127,0,0,0,0},
/*"F"*/ {0,0,127,51,49,52,60,52,48,48,48,120,0,0,0,0},
/*"G"*/ {0,0,30,51,97,96,96,111,99,99,55,29,0,0,0,0},
/*"H"*/ {0,0,99,99,99,99,127,99,99,99,99,99,0,0,0,0},
/*"I"*/ {0,0,60,24,24,24,24,24,24,24,24,60,0,0,0,0},
/*"J"*/ {0,0,15,6,6,6,6,6,6,102,102,60,0,0,0,0},
/*"K"*/ {0,0,115,51,54,54,60,54,54,51,51,115,0,0,0,0},
/*"L"*/ {0,0,120,48,48,48,48,48,48,49,51,127,0,0,0,0},
/*"M"*/ {0,0,99,119,127,107,99,99,99,99,99,99,0,0,0,0},
/*"N"*/ {0,0,99,99,115,123,127,111,103,99,99,99,0,0,0,0},
/*"O"*/ {0,0,28,54,99,99,99,99,99,99,54,28,0,0,0,0},
/*"P"*/ {0,0,126,51,51,51,62,48,48,48,48,120,0,0,0,0},
/*"Q"*/ {0,0,62,99,99,99,99,99,99,107,111,62,6,7,0,0},
/*"R"*/ {0,0,126,51,51,51,62,54,54,51,51,115,0,0,0,0},
/*"S"*/ {0,0,62,99,99,48,28,6,3,99,99,62,0,0,0,0},
/*"T"*/ {0,0,255,219,153,24,24,24,24,24,24,60,0,0,0,0},
/*"U"*/ {0,0,99,99,99,99,99,99,99,99,99,62,0,0,0,0},
/*"V"*/ {0,0,99,99,99,99,99,99,99,54,28,8,0,0,0,0},
/*"W"*/ {0,0,99,99,99,99,99,107,107,127,54,54,0,0,0,0},
/*"X"*/ {0,0,195,195,102,60,24,24,60,102,195,195,0,0,0,0},
/*"Y"*/ {0,0,195,195,195,102,60,24,24,24,24,60,0,0,0,0},
/*"Z"*/ {0,0,127,99,67,6,12,24,48,97,99,127,0,0,0,0},
/*"["*/ {0,0,60,48,48,48,48,48,48,48,48,60,0,0,0,0},
/*"\\"*/ {0,0,128,192,224,112,56,28,14,7,3,1,0,0,0,0},
/*"}"*/ {0,0,60,12,12,12,12,12,12,12,12,60,0,0,0,0},
/*"^"*/ {8,28,54,99,0,0,0,0,0,0,0,0,0,0,0,0},
/*"_"*/ {0,0,0,0,0,0,0,0,0,0,0,0,255,0,0,0},
/*"'"*/ {24,24,12,0,0,0,0,0,0,0,0,0,0,0,0,0},
/*"a"*/ {0,0,0,0,0,60,70,6,62,102,102,59,0,0,0,0},
/*"b"*/ {0,0,112,48,48,60,54,51,51,51,51,110,0,0,0,0},
/*"c"*/ {0,0,0,0,0,62,99,96,96,96,99,62,0,0,0,0},
/*"d"*/ {0,0,14,6,6,30,54,102,102,102,102,59,0,0,0,0},
/*"e"*/ {0,0,0,0,0,62,99,99,126,96,99,62,0,0,0,0},
/*"f"*/ {0,0,28,54,50,48,124,48,48,48,48,120,0,0,0,0},
/*"g"*/ {0,0,0,0,0,59,102,102,102,102,62,6,102,60,0,0},
/*"h"*/ {0,0,112,48,48,54,59,51,51,51,51,115,0,0,0,0},
/*"i"*/ {0,0,12,12,0,28,12,12,12,12,12,30,0,0,0,0},
/*"j"*/ {0,0,6,6,0,14,6,6,6,6,6,102,102,60,0,0},
/*"k"*/ {0,0,112,48,48,51,51,54,60,54,51,115,0,0,0,0},
/*"l"*/ {0,0,28,12,12,12,12,12,12,12,12,30,0,0,0,0},
/*"m"*/ {0,0,0,0,0,110,127,107,107,107,107,107,0,0,0,0},
/*"n"*/ {0,0,0,0,0,110,51,51,51,51,51,51,0,0,0,0},
/*"o"*/ {0,0,0,0,0,62,99,99,99,99,99,62,0,0,0,0},
/*"p"*/ {0,0,0,0,0,110,51,51,51,51,62,48,48,120,0,0},
/*"q"*/ {0,0,0,0,0,59,102,102,102,102,62,6,6,15,0,0},
/*"r"*/ {0,0,0,0,0,110,59,51,48,48,48,120,0,0,0,0},
/*"s"*/ {0,0,0,0,0,62,99,56,14,3,99,62,0,0,0,0},
/*"t"*/ {0,0,8,24,24,126,24,24,24,24,27,14,0,0,0,0},
/*"u"*/ {0,0,0,0,0,102,102,102,102,102,102,59,0,0,0,0},
/*"v"*/ {0,0,0,0,0,99,99,54,54,28,28,8,0,0,0,0},
/*"w"*/ {0,0,0,0,0,99,99,99,107,107,127,54,0,0,0,0},
/*"x"*/ {0,0,0,0,0,99,54,28,28,28,54,99,0,0,0,0},
/*"y"*/ {0,0,0,0,0,99,99,99,99,99,63,3,6,60,0,0},
/*"z"*/ {0,0,0,0,0,127,102,12,24,48,99,127,0,0,0,0},
/*"{"*/ {0,0,14,24,24,24,112,24,24,24,24,14,0,0,0,0},
/*"|"*/ {0,0,24,24,24,24,24,0,24,24,24,24,24,0,0,0},
/*"}"*/ {0,0,112,24,24,24,14,24,24,24,24,112,0,0,0,0},
/*"~"*/ {0,0,59,110,0,0,0,0,0,0,0,0,0,0,0,0}
};

#endif