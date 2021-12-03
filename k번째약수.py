import sys
sys.stdin = open("input.txt", "rt")

# 나의 풀이
# n, k = map(int, input().split())
# #1. 배열에 담는다
# a = []
# for i in range(1, n+1):
#     if n % i == 0:
#         a.append(i)
# #2. 해당하는 순서를 추출한다.
# if len(a) < k:
#     print(-1)
# else:
#     print(a[k-1])

# 모범답안
# 숫자로 고쳐주는 map
n, k = map(int, input().split())
# 찾으면 다음으로
cnt = 0
for i in range(1, n+1):
    if(n % i == 0):
        cnt += 1
        # 파이썬은 증감연산자가 없습니다용~
    if(cnt == k):
        print(i)
        break
    # for문이 break없이 끝나면 else로~
else:
    print(-1)
