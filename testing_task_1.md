### Testing task 1 code:

# Carry out static testing on the code below.  
# Read through the code.  
# Comment any errors you can see without correcting them.

 ```
def func1 val  // should be: def func1(val)
  if val = 1 // should be  ==
  return true
  else
  return false
  end
end

dif max a b    // should be: def max(a, b)
  if a > b
      return a  
  else
  b             
  end
end            // too many ends
end

def looper
  for i in 1..10  // missing brackets
  puts i        // (style) missing indentation
  end
                //return i
end

failures = 0


if looper == 10
  puts "looper passed"
else
  puts "looper failed"

  failures = failures + 1

  //missing end


if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
//should be "max(100, 1) failed"
  puts "func1(3) failed"
//should be failures = failures +=1
  failrues = failures + 1
end


if failures // needs sth to evaluate to  e.g. < 0
  puts "Test Failed"
else
  puts "Test Passed"
end

```
