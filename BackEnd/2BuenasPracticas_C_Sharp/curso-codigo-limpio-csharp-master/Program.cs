using System;
using System.Collections.Generic;

namespace ToDo
{
    internal class Program
    {
        public static List<string> TaskList { get; set; }

        static void Main(string[] args)
        {
            TaskList = new List<string>();
            int MenuSelected = 0;
            do
            {
                MenuSelected = ShowMainMenu();
                if ((Menu)MenuSelected == Menu.add)
                {
                    ShowMenuAdd();
                }
                else if ((Menu)MenuSelected == Menu.Remove)
                {
                    ShowMenuRemove();
                }
                else if ((Menu)MenuSelected == Menu.List)
                {
                    ShowMenuTaskList();
                }
            } while ((Menu)MenuSelected != Menu.Exit);
        }
        /// <summary>
        /// Show the main menu 
        /// </summary>
        /// <returns>Returns option indicated by user</returns>
        public static int ShowMainMenu()
        {
            Console.WriteLine("----------------------------------------");
            Console.WriteLine("Ingrese la opción a realizar: ");
            Console.WriteLine("1. Nueva tarea");
            Console.WriteLine("2. Remover tarea");
            Console.WriteLine("3. Tareas pendientes");
            Console.WriteLine("4. Salir");

            // Read line
            string ReadOption = Console.ReadLine();
            return Convert.ToInt32(ReadOption);
        }

        public static void ShowMenuRemove()
        {
            try
            {
                Console.WriteLine("Ingrese el número de la tarea a remover: ");
                // Show current taks
                ShowTaskList();

                string ReadOption = Console.ReadLine();
                // Remove one position
                int RemoveTask = Convert.ToInt32(ReadOption) - 1;

                if (RemoveTask >  (TaskList.Count -1) || RemoveTask < 0)
                    Console.WriteLine("Numero de tarea seleccionada no es valido");
                else{
                    if (RemoveTask > -1 && TaskList.Count > 0)
                    {
                        string task = TaskList[RemoveTask];
                        TaskList.RemoveAt(RemoveTask);
                        Console.WriteLine("Tarea " + task + " eliminada");
                    }
                }  
            }
            catch (Exception)
            {
                Console.WriteLine("Ha ocurrido un error al eliminar la tarea");
            }
        }

        public static void ShowMenuAdd()
        {
            try
            {
                Console.WriteLine("Ingrese el nombre de la tarea: ");
                string task = Console.ReadLine();
                TaskList.Add(task);
                Console.WriteLine("Tarea registrada");
            }
            catch (Exception)
            {
                Console.WriteLine("Ha ocurrido un error inesperado al registrar la tarea");
            }
        }

        public static void ShowMenuTaskList()
        {
            if (TaskList == null || TaskList.Count == 0)
            {
                Console.WriteLine("No hay tareas por realizar");
            } 
            else
            {
                ShowTaskList();
            }
        }

        public static void ShowTaskList () {
            Console.WriteLine("----------------------------------------");
            var indexTask=1;
            TaskList.ForEach(p=> Console.WriteLine(indexTask++ + ". " + p)); 
            Console.WriteLine("----------------------------------------");
        }
    }

    public enum Menu {
        add = 1,
        Remove = 2,
        List = 3,
        Exit= 4
    }
}
