# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.12

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /Applications/待清理/CLion.app/Contents/bin/cmake/mac/bin/cmake

# The command to remove a file.
RM = /Applications/待清理/CLion.app/Contents/bin/cmake/mac/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /Users/rachel/leetcode/duplicated

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /Users/rachel/leetcode/duplicated/cmake-build-debug

# Include any dependencies generated for this target.
include CMakeFiles/duplicated.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/duplicated.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/duplicated.dir/flags.make

CMakeFiles/duplicated.dir/main.cpp.o: CMakeFiles/duplicated.dir/flags.make
CMakeFiles/duplicated.dir/main.cpp.o: ../main.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/rachel/leetcode/duplicated/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/duplicated.dir/main.cpp.o"
	/Library/Developer/CommandLineTools/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/duplicated.dir/main.cpp.o -c /Users/rachel/leetcode/duplicated/main.cpp

CMakeFiles/duplicated.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/duplicated.dir/main.cpp.i"
	/Library/Developer/CommandLineTools/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /Users/rachel/leetcode/duplicated/main.cpp > CMakeFiles/duplicated.dir/main.cpp.i

CMakeFiles/duplicated.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/duplicated.dir/main.cpp.s"
	/Library/Developer/CommandLineTools/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /Users/rachel/leetcode/duplicated/main.cpp -o CMakeFiles/duplicated.dir/main.cpp.s

# Object files for target duplicated
duplicated_OBJECTS = \
"CMakeFiles/duplicated.dir/main.cpp.o"

# External object files for target duplicated
duplicated_EXTERNAL_OBJECTS =

duplicated: CMakeFiles/duplicated.dir/main.cpp.o
duplicated: CMakeFiles/duplicated.dir/build.make
duplicated: CMakeFiles/duplicated.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/Users/rachel/leetcode/duplicated/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable duplicated"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/duplicated.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/duplicated.dir/build: duplicated

.PHONY : CMakeFiles/duplicated.dir/build

CMakeFiles/duplicated.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/duplicated.dir/cmake_clean.cmake
.PHONY : CMakeFiles/duplicated.dir/clean

CMakeFiles/duplicated.dir/depend:
	cd /Users/rachel/leetcode/duplicated/cmake-build-debug && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/rachel/leetcode/duplicated /Users/rachel/leetcode/duplicated /Users/rachel/leetcode/duplicated/cmake-build-debug /Users/rachel/leetcode/duplicated/cmake-build-debug /Users/rachel/leetcode/duplicated/cmake-build-debug/CMakeFiles/duplicated.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/duplicated.dir/depend

