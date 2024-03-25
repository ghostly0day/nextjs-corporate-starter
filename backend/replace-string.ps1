$folderPath = 'W:\OneDrive\Desktop\SHEFFORD\nextjs-corporate-starter\backend' # Change this to your folder path
$fileType = '*.*' # Adjust the file type if necessary
$exactMatch = '\eBaTT Dashboard\b' # The word boundary \b ensures an exact match
$replacementString = 'eBaTT Dashboard'

Get-ChildItem -Path $folderPath -Filter $fileType -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $updatedContent = $content -replace $exactMatch, $replacementString
    if ($updatedContent -ne $content) {
        Set-Content -Path $_.FullName -Value $updatedContent
        Write-Output "Updated file: $($_.FullName)"
    }
}
