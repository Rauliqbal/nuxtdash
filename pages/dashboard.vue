<template>
    <div>
      <h1 class="mb-4 text-2xl font-bold">Welcome to the Dashboard</h1>
  
      <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card v-for="n in 3" :key="n">
          <CardContent>
            <p>Stat Card {{ n }}</p>
          </CardContent>
        </Card>
      </div>
  
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Jane Doe</TableCell>
                <TableCell>jane@example.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  </template>
  