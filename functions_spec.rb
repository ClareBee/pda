require 'minitest/autorun'
require 'minitest/rg'

require_relative './testing_task_2'

class Test_testing_task < MiniTest::Test

  def test_func1()
    actual1 = func1(1)
    actual2 = func1(3)
    assert_equal(true, actual1)
    assert_equal(false, actual2)
  end

  def test_max()
    actual1 = max(100, 1)
    actual2 = max(1, 100)
    assert_equal(100, actual1)
    assert_equal(100, actual2)
  end

  def test_looper()
    
    assert_equal(10, looper)
  end

end
